using System.ComponentModel;

namespace testLibrary
{
    /// <summary>
    /// Some widget maker.  It makes widgets and happens to need an ILogger.  doesn't care what ILogger, just needs one.
    /// </summary>
    public class WidgetMaker
    {
        private ILogger logger;

        public WidgetMaker(ILogger logger)
        {
            this.logger = logger;
        }

        public string DoSomeWork()
        {
            logger.LogWarn("doing... something");
            return "did some work";
        }
    }
}