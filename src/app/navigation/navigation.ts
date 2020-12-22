import { FuseNavigation } from "@fuse/types";

export const navigation: FuseNavigation[] = [
    {
        id: "applications",
        title: "Applications",
        translate: "NAV.APPLICATIONS",
        type: "group",
        children: [
            // {
            //     id: "sample",
            //     title: "Sample",
            //     translate: "NAV.SAMPLE.TITLE",
            //     type: "item",
            //     icon: "email",
            //     url: "/sample",
            //     badge: {
            //         title: "25",
            //         translate: "NAV.SAMPLE.BADGE",
            //         bg: "#F44336",
            //         fg: "#FFFFFF",
            //     },
            // },
            {
                id: "members",
                title: "Members",
                type: "item",
                icon: "person",
                url: "/members",
            },
            {
                id: "memberUsers",
                title: "Members Users",
                type: "item",
                icon: "group",
                url: "/blank",
            },
            {
                id: "memberUsersRoles",
                title: "Members User Roles",
                type: "item",
                icon: "person_add",
                url: "/blank",
            },
            {
                id: "memberUsers",
                title: "Mutual Drug Administrators",
                type: "item",
                icon: "assignment_ind",
                url: "/blank",
            },
            {
                id: "memberUsers",
                title: "Products",
                type: "item",
                icon: "crop_square",
                url: "/blank",
            },
            {
                id: "memberUsers",
                title: "Product Categories",
                type: "item",
                icon: "apps",
                url: "/blank",
            },
        ],
    },
];
