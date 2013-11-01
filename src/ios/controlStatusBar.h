#import <Foundation/Foundation.h>
#import <Cordova/CDV.h>
#import "AppDelegate.h"

@interface controlStatusBar : CDVPlugin
- (void)hide:(CDVInvokedUrlCommand*)command;
- (void)show:(CDVInvokedUrlCommand*)command;
@end