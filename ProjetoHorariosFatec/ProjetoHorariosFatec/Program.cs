using Microsoft.EntityFrameworkCore;
using ProjetoHorariosFatec.Data;
using ProjetoHorariosFatec.Helper;
using ProjetoHorariosFatec.Repositorio;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<PBancoContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

builder.Services.AddScoped<IHorariosRepositorio, HorariosRepositorio>();

builder.Services.AddScoped<ILoginRepositorio, LoginRepositorio>();

builder.Services.AddScoped<ISessao, Sessao>();


// Add services to the container.
builder.Services.AddControllersWithViews();


builder.Services.AddSession(o =>
{
    o.Cookie.HttpOnly = true;
    o.Cookie.IsEssential = true;
});

var app = builder.Build();



// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.UseSession();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Horarios}/{action=Index}/{id?}");

app.Run();
