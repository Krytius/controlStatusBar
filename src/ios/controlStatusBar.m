#import "controlStatusBar.h"

@implementation controlStatusBar

- (void)hide:(CDVInvokedUrlCommand*)command
{
    [[UIApplication sharedApplication] setStatusBarHidden:YES];
}

- (void)show:(CDVInvokedUrlCommand*)command
{
    [[UIApplication sharedApplication] setStatusBarHidden:NO];
}

@end