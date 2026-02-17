var builder = WebApplication.CreateBuilder(args);

// Add controllers
builder.Services.AddControllers();

// Add Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Enable Swagger always
app.UseSwagger();
app.UseSwaggerUI();

// Disable HTTPS redirection to avoid confusion
// app.UseHttpsRedirection();

app.MapControllers();

app.Run();

