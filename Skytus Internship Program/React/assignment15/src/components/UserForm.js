import { useForm } from 'react-hook-form';

function UserForm({ onAddUser }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      role: '',
    },
  });

  const onSubmit = (data) => {
    onAddUser(data);
    reset();
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-3">Add User</h5>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name ? <div className="invalid-feedback">{errors.name.message}</div> : null}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email ? <div className="invalid-feedback">{errors.email.message}</div> : null}
          </div>

          <div className="mb-3">
            <label className="form-label">Role</label>
            <select
              className={`form-select ${errors.role ? 'is-invalid' : ''}`}
              {...register('role', { required: 'Role is required' })}
            >
              <option value="">Select role</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
            {errors.role ? <div className="invalid-feedback">{errors.role.message}</div> : null}
          </div>

          <button type="submit" className="btn btn-primary">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
