const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const { orderBy, searchTerm = '' } = request.query;
    const contacts = await ContactRepository.findAll(orderBy, searchTerm);

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    return response.json(contact);
  }

  async store(request, response) {
    const {
      name,
      email,
      phone,
      category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Field name is required' });
    }

    const checkIfEmailExists = await ContactRepository.findByEmail(email);

    if (checkIfEmailExists) {
      return response.status(400).json({ error: 'User already registered' });
    }

    const contact = await ContactRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    return response.status(201).json(contact);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name,
      email,
      phone,
      category_id,
    } = request.body;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Field name is required' });
    }

    const contactByEmail = await ContactRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ error: 'User already registered' });
    }

    const updatedContact = await ContactRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    return response.json(updatedContact);
  }

  async delete(request, response) {
    const { id } = request.params;

    await ContactRepository.remove(id);

    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
