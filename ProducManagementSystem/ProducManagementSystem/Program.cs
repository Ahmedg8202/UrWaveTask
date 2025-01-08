
using Carter;
using Microsoft.EntityFrameworkCore;
using ProductManagementSystem.Application.DTOs;
using ProductManagementSystem.Application.Interfaces;
using ProductManagementSystem.Application.Mappers;
using ProductManagementSystem.Application.Services;
using ProductManagementSystem.Application.Validators;
using ProductManagementSystem.Domain.Interfaces;
using ProductManagementSystem.Infrastructure.Data;
using ProductManagementSystem.Infrastructure.Repositories;
using ProductManagementSystem.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IBaseRepository<Product>, BaseRepository<Product>>();
builder.Services.AddScoped<IProductService, ProductService>();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
    );

builder.Services.AddAutoMapper(typeof(ProductMappers));

builder.Services.AddCarter();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

builder.Services.AddCors((options) =>
{
    options.AddPolicy("DevCors", (corsBuilder) =>
    {
        corsBuilder.WithOrigins("http://localhost:4200", "http://localhost:3000", "http://localhost:8000")
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials();
    });

    options.AddPolicy("ProdCors", (corsBuilder) =>
    {
        corsBuilder.WithOrigins("https://myProductionSite.com")
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseCors("DevCors");
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapCarter();

app.Run();
