using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(core.ventures.Startup))]
namespace core.ventures
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
