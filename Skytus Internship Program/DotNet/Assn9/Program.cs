var builder = WebApplication.CreateBuilder(args);

// 🔹 Enable Controllers
builder.Services.AddControllers();
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddApiVersioning(options =>
{
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.DefaultApiVersion = new Microsoft.AspNetCore.Mvc.ApiVersion(1, 0);
    options.ReportApiVersions = true;
});

// 🔹 Enable Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// 🔹 Enable Swagger UI (force enabled)
app.UseSwagger();
app.UseSwaggerUI();

// 🔹 Disable HTTPS redirection for now (avoids confusion)
// app.UseHttpsRedirection();

// 🔹 Map Controllers
app.MapControllers();

app.Run();
