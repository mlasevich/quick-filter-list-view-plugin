package com.legrig.filterview;

import hudson.Extension;
import hudson.model.ListView;
import hudson.model.ViewDescriptor;
import hudson.model.ViewGroup;
import org.kohsuke.stapler.DataBoundConstructor;


/**
 * List View with live filters.
 */
public class FilteredListView extends ListView {

    @DataBoundConstructor
    public FilteredListView(String name) {
        super(name);
    }

    public FilteredListView(String name, ViewGroup owner) {
        super(name, owner);
    }


    @Extension
    public static final class DescriptorImpl extends ViewDescriptor {

        @Override
        public String getDisplayName() {
            return Messages.FilterListView_displayName();
        }
    }

}
