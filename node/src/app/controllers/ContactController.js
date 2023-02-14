const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ erro: 'User not found' });
    }

    return response.json(contact);
  }

  store() {
    // Save one record
  }

  update() {
    // Update one record
  }

  async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ erro: 'User not found' });
    }

    await ContactRepository.remove(id);

    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
