const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoryRepository.findAll(orderBy);

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await CategoryRepository.findById(id);

    if (!category) {
      return response.status(404).json({ erro: 'Category not found' });
    }

    return response.json(category);
  }

  async store(request, response) {
    const {
      name,
    } = request.body;

    if (!name) {
      return response.status(400).json({ erro: 'Field name is required' });
    }

    const checkIfCategoryExists = await CategoryRepository.findByName(name);

    if (checkIfCategoryExists) {
      return response.status(400).json({ erro: 'Category already registered' });
    }

    const category = await CategoryRepository.create({
      name,
    });

    return response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name,
    } = request.body;

    const category = await CategoryRepository.findById(id);

    if (!category) {
      return response.status(404).json({ erro: 'Category not found' });
    }

    if (!name) {
      return response.status(400).json({ erro: 'Field name is required' });
    }

    const categoryByEmail = await CategoryRepository.findByName(name);

    if (categoryByEmail && categoryByEmail.id !== id) {
      return response.status(400).json({ erro: 'Category already registered' });
    }

    const updatedCategory = await CategoryRepository.update(id, {
      name,
    });

    return response.json(updatedCategory);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoryRepository.remove(id);

    return response.sendStatus(204);
  }
}

module.exports = new CategoryController();
