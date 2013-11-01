# Cordova Control Status Bar Plugin #
by Elvis Ferreira Coelho

1. Make sure you are running Cordova(PhoneGap) 3.0 ++
2. Install using the command:

```bash
phonegap local plugin add https://github.com/Krytius/controlStatusBar.git
```

## JAVASCRIPT INTERFACE ##

## IOS XCODE ##

1.Add code MainViewController.m method viewDidLoad

```bash
	if ([self respondsToSelector:@selector(setNeedsStatusBarAppearanceUpdate)]) {
        // iOS 7
        [self performSelector:@selector(setNeedsStatusBarAppearanceUpdate)];
    } else {
        // iOS 6
        [[UIApplication sharedApplication] setStatusBarHidden:YES withAnimation:UIStatusBarAnimationFade];
    }
    
    [[UIApplication sharedApplication] setIdleTimerDisabled: YES];
```


## BUGS AND CONTRIBUTIONS ##

