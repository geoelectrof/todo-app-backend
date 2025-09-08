import { AppDataSource } from '../src/data-source';
import { Role } from '../src/entities/role.entity';
import { TodoItemStatus } from '../src/entities/todo_item_status.entity';

async function seed() {
  await AppDataSource.initialize();
  console.log('Data Source has been initialized!');

  const roleRepository = AppDataSource.getRepository(Role);
  const statusRepository = AppDataSource.getRepository(TodoItemStatus);

  try {
    // --- Seed Roles ---
    const defaultRoles = ['admin', 'user'];
    for (const roleName of defaultRoles) {
      const existingRole = await roleRepository.findOneBy({ name: roleName });
      if (!existingRole) {
        const newRole = roleRepository.create({ name: roleName });
        await roleRepository.save(newRole);
        console.log(`Created role: ${roleName}`);
      } else {
        console.log(`Role already exists: ${roleName}`);
      }
    }

    // --- Seed Todo Item Statuses ---
    const defaultStatuses = ['pending', 'in_progress', 'completed'];
    for (const statusName of defaultStatuses) {
      const existingStatus = await statusRepository.findOneBy({ name: statusName });
      if (!existingStatus) {
        const newStatus = statusRepository.create({ name: statusName });
        await statusRepository.save(newStatus);
        console.log(`Created status: ${statusName}`);
      } else {
        console.log(`Status already exists: ${statusName}`);
      }
    }

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await AppDataSource.destroy();
    console.log('Data Source has been closed.');
  }
}

seed();