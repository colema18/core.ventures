using System.Web;
using System.Web.Optimization;

namespace core.ventures
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/css/baseline").Include(
                      "~/content/css/skel.css",
                      "~/content/css/style.css",
                      "~/content/css/style-large.css",
                      "~/content/css/venobox.css"));

            bundles.Add(new ScriptBundle("~/js/baseline").Include(
                      "~/content/js/jquery.min.js",
                      "~/content/js/jquery.scrollex.min.js",
                      "~/content/js/jquery.scrolly.min.js",
                      "~/content/js/skel.min.js",
                      "~/content/js/init.js",
                      "~/content/js/default.js",
                      "~/content/js/venobox.min.js"));

            bundles.Add(new StyleBundle("~/css/fancybox").Include(
                      "~/content/css/jquery.fancybox.css?v=2.1.5",
                      "~/content/css/jquery.fancybox-buttons.css?v=1.0.5",
                      "~/content/css/jquery.fancybox-thumbs.css?v=1.0.7"));

            bundles.Add(new ScriptBundle("~/js/fancybox").Include(
                      "~/content/js/jquery.fancybox.pack.js?v=2.1.5",
                      "~/content/js/jquery.fancybox-buttons.js?v=1.0.5",
                      "~/content/js/jquery.fancybox-media.js?v=1.0.6",
                      "~/content/js/jquery.fancybox-thumbs.js?v=1.0.7"));
        }
    }
}
