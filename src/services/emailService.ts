export interface ContactMessagePayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  honey?: string;
}

export interface EmailSendResult {
  success: boolean;
  needsActivation?: boolean;
  message?: string;
  error?: string;
}

const DEFAULT_RECIPIENT_EMAIL = 'onemurilo@gmail.com';

/**
 * Sends a contact form message using FormSubmit (100% free, unlimited, no registration required)
 * or Web3Forms if VITE_WEB3FORMS_ACCESS_KEY is defined in the environment.
 */
export async function sendContactEmail(payload: ContactMessagePayload): Promise<EmailSendResult> {
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL || DEFAULT_RECIPIENT_EMAIL;

  // If a honeypot field is filled, silently ignore (likely a spam bot)
  if (payload.honey && payload.honey.trim() !== '') {
    return {
      success: true,
      message: 'Message processed',
    };
  }

  // 1. If Web3Forms key is configured, use Web3Forms API
  if (web3FormsKey && web3FormsKey.trim() !== '') {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: payload.name,
          email: payload.email,
          subject: payload.subject || `Novo contato de ${payload.name}`,
          message: payload.message,
          from_name: 'Portfólio Murilo Freitas',
        }),
      });

      const result = await response.json();
      if (result.success || response.ok) {
        return {
          success: true,
          message: result.message || 'Email sent successfully via Web3Forms',
        };
      }
      return {
        success: false,
        error: result.message || 'Erro ao enviar via Web3Forms',
      };
    } catch (err: unknown) {
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Falha na conexão com Web3Forms',
      };
    }
  }

  // 2. Default: Use FormSubmit AJAX endpoint (Free, no account needed)
  try {
    const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        _replyto: payload.email,
        _subject: payload.subject || `Novo contato de ${payload.name} (Portfólio)`,
        message: payload.message,
        _template: 'table',
        _captcha: 'false',
        _honey: payload.honey || '',
      }),
    });

    const data = await response.json().catch(() => null);

    // FormSubmit returns {"success":"false","message":"This form needs Activation..."} on first ever submission
    if (data && typeof data.message === 'string' && data.message.toLowerCase().includes('activation')) {
      return {
        success: true,
        needsActivation: true,
        message: data.message,
      };
    }

    const isSuccess = data?.success === 'true' || data?.success === true || response.ok;
    if (isSuccess) {
      return {
        success: true,
        message: data?.message || 'Email enviado com sucesso!',
      };
    }

    return {
      success: false,
      error: data?.message || `Falha no envio (Status HTTP ${response.status})`,
    };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Erro de conexão ao enviar mensagem',
    };
  }
}
