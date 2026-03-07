/**
 * Contact form controller
 * Validates input and stores/sends contact message
 */

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name?.trim()) {
      return res.status(400).json({ error: 'Name is required' });
    }
    if (!email?.trim()) {
      return res.status(400).json({ error: 'Email is required' });
    }
    if (!message?.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // In production: send email via Nodemailer or save to DB
    // For now we log and return success (ready for Nodemailer integration)
    console.log('Contact submission:', { name, email, message: message.slice(0, 50) + '...' });

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received.',
    });
  } catch (err) {
    console.error('Contact submit error:', err);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
};
