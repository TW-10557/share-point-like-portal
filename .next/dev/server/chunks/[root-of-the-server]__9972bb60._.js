module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/mock-data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockAnnouncements",
    ()=>mockAnnouncements,
    "mockDocuments",
    ()=>mockDocuments,
    "mockEvents",
    ()=>mockEvents,
    "mockFAQs",
    ()=>mockFAQs,
    "mockHelpTickets",
    ()=>mockHelpTickets,
    "mockNotifications",
    ()=>mockNotifications,
    "mockTeams",
    ()=>mockTeams,
    "mockTeamsMessages",
    ()=>mockTeamsMessages
]);
const mockAnnouncements = [
    {
        id: "1",
        title: "Q4 Company Performance Update",
        titleJa: "第4四半期 会社業績アップデート",
        content: "We are pleased to announce that our Q4 results have exceeded expectations. Revenue grew by 25% compared to last quarter, and we have successfully launched three new products. Thank you all for your hard work and dedication.",
        contentJa: "第4四半期の業績が予想を上回りましたことをお知らせいたします。売上は前四半期比25%増加し、3つの新製品の発売に成功しました。皆様のご尽力に感謝申し上げます。",
        priority: "ceo",
        department: "all",
        status: "approved",
        author: "Sarah Johnson, CEO",
        authorId: "ceo-1",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        imageUrl: "/business-growth-chart.png",
        isAiGenerated: false,
        aiOverridden: false
    },
    {
        id: "2",
        title: "System Maintenance - This Weekend",
        titleJa: "システムメンテナンス - 今週末",
        content: "Critical system maintenance will be performed this Saturday from 2 AM to 6 AM JST. All internal systems including email and file sharing will be temporarily unavailable. Please save your work before Friday evening.",
        contentJa: "今週土曜日の午前2時から午前6時（日本時間）まで、重要なシステムメンテナンスを実施いたします。メールやファイル共有を含むすべての社内システムが一時的に利用できなくなります。金曜日の夕方までに作業を保存してください。",
        priority: "urgent",
        department: "all",
        status: "approved",
        author: "IT Department",
        authorId: "it-1",
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        updatedAt: new Date(Date.now() - 86400000).toISOString(),
        isAiGenerated: false,
        aiOverridden: false
    },
    {
        id: "3",
        title: "New Health Insurance Benefits",
        titleJa: "新しい健康保険給付",
        content: "Starting February 1st, we are expanding our health insurance coverage to include mental health services, dental care, and vision care. Please review the updated benefits package in the HR portal.",
        contentJa: "2月1日より、健康保険の適用範囲を拡大し、メンタルヘルスサービス、歯科治療、視力ケアが含まれるようになります。HRポータルで更新された給付パッケージをご確認ください。",
        priority: "important",
        department: "all",
        status: "approved",
        author: "HR Team",
        authorId: "hr-1",
        createdAt: new Date(Date.now() - 172800000).toISOString(),
        updatedAt: new Date(Date.now() - 172800000).toISOString(),
        isAiGenerated: true,
        aiOverridden: false
    },
    {
        id: "4",
        title: "Engineering Team Sprint Review",
        titleJa: "エンジニアリングチーム スプリントレビュー",
        content: "The engineering team has completed Sprint 24 with 95% of planned features delivered. Key highlights include the new authentication system, performance improvements, and mobile app updates.",
        contentJa: "エンジニアリングチームはスプリント24を完了し、計画された機能の95%を提供しました。主なハイライトには、新しい認証システム、パフォーマンスの改善、モバイルアプリの更新が含まれます。",
        priority: "general",
        department: "engineering",
        status: "approved",
        author: "Mike Chen",
        authorId: "eng-1",
        createdAt: new Date(Date.now() - 259200000).toISOString(),
        updatedAt: new Date(Date.now() - 259200000).toISOString(),
        isAiGenerated: true,
        aiOverridden: true
    },
    {
        id: "5",
        title: "Marketing Campaign Launch",
        titleJa: "マーケティングキャンペーン開始",
        content: 'Our new brand campaign "Innovation Forward" launches next Monday across all digital channels. Marketing team members please join the kickoff meeting at 10 AM.',
        contentJa: "新しいブランドキャンペーン「Innovation Forward」が来週月曜日にすべてのデジタルチャネルで開始されます。マーケティングチームのメンバーは午前10時のキックオフミーティングにご参加ください。",
        priority: "event",
        department: "marketing",
        status: "approved",
        author: "Lisa Wang",
        authorId: "mkt-1",
        createdAt: new Date(Date.now() - 345600000).toISOString(),
        updatedAt: new Date(Date.now() - 345600000).toISOString(),
        imageUrl: "/marketing-campaign-colorful.jpg",
        isAiGenerated: false,
        aiOverridden: false
    },
    {
        id: "6",
        title: "Budget Submission Deadline",
        titleJa: "予算提出締め切り",
        content: "All department heads are reminded that the FY2024 budget submissions are due by January 31st. Please ensure all projections and justifications are included in your submissions.",
        contentJa: "すべての部門長に、2024年度予算の提出期限が1月31日であることをお知らせします。すべての予測と根拠を提出物に含めてください。",
        priority: "deadline",
        department: "finance",
        status: "approved",
        author: "Finance Team",
        authorId: "fin-1",
        createdAt: new Date(Date.now() - 432000000).toISOString(),
        updatedAt: new Date(Date.now() - 432000000).toISOString(),
        isAiGenerated: false,
        aiOverridden: false
    }
];
const today = new Date();
const getDateOffset = (days)=>{
    const date = new Date(today);
    date.setDate(date.getDate() + days);
    return date.toISOString();
};
const mockEvents = [
    {
        id: "1",
        title: "All-Hands Meeting",
        titleJa: "全社ミーティング",
        description: "Quarterly all-hands meeting with CEO presentation and Q&A session.",
        descriptionJa: "CEOプレゼンテーションとQ&Aセッションを含む四半期全社ミーティング。",
        startDate: getDateOffset(5),
        endDate: getDateOffset(5),
        location: "Main Conference Room / Zoom",
        department: "all",
        priority: "important",
        isRecurring: true,
        recurrencePattern: "quarterly",
        reminderSent: false,
        createdBy: "HR Team",
        color: "#0078D4",
        attendees: [
            "all"
        ]
    },
    {
        id: "2",
        title: "Product Launch Celebration",
        titleJa: "製品発売祝賀会",
        description: "Celebration party for the successful launch of our new flagship product.",
        descriptionJa: "新しいフラッグシップ製品の発売成功を祝うパーティー。",
        startDate: getDateOffset(10),
        endDate: getDateOffset(10),
        location: "Rooftop Terrace",
        department: "all",
        priority: "event",
        isRecurring: false,
        reminderSent: false,
        createdBy: "Events Team",
        color: "#107C10"
    },
    {
        id: "3",
        title: "Engineering Tech Talk",
        titleJa: "エンジニアリング技術講演",
        description: 'Monthly tech talk series - this month: "Building Scalable Microservices"',
        descriptionJa: "月例技術講演シリーズ - 今月:「スケーラブルなマイクロサービスの構築」",
        startDate: getDateOffset(3),
        endDate: getDateOffset(3),
        location: "Engineering Floor / Teams",
        department: "engineering",
        priority: "general",
        isRecurring: true,
        recurrencePattern: "monthly",
        reminderSent: true,
        createdBy: "Engineering Lead",
        color: "#5C2D91"
    },
    {
        id: "4",
        title: "Sales Training Workshop",
        titleJa: "営業研修ワークショップ",
        description: "Advanced negotiation techniques and closing strategies workshop.",
        descriptionJa: "高度な交渉テクニックとクロージング戦略のワークショップ。",
        startDate: getDateOffset(7),
        endDate: getDateOffset(7),
        location: "Training Room B",
        department: "sales",
        priority: "important",
        isRecurring: false,
        reminderSent: false,
        createdBy: "Sales Director",
        color: "#D83B01"
    },
    {
        id: "5",
        title: "Monthly Team Sync",
        titleJa: "月例チーム同期",
        description: "Regular monthly sync meeting for all team leads.",
        descriptionJa: "すべてのチームリーダーのための定期的な月例同期ミーティング。",
        startDate: getDateOffset(1),
        endDate: getDateOffset(1),
        location: "Teams Meeting",
        department: "all",
        priority: "general",
        isRecurring: true,
        recurrencePattern: "monthly",
        reminderSent: false,
        createdBy: "Operations",
        color: "#008272"
    },
    {
        id: "past-1",
        title: "Q3 Review Meeting",
        titleJa: "第3四半期レビューミーティング",
        description: "Quarterly review of Q3 performance and goals.",
        descriptionJa: "第3四半期のパフォーマンスと目標の四半期レビュー。",
        startDate: getDateOffset(-10),
        endDate: getDateOffset(-10),
        location: "Board Room",
        department: "all",
        priority: "important",
        isRecurring: false,
        reminderSent: true,
        createdBy: "CEO Office",
        color: "#0078D4"
    },
    {
        id: "past-2",
        title: "Security Training",
        titleJa: "セキュリティトレーニング",
        description: "Mandatory annual security awareness training.",
        descriptionJa: "年次必須セキュリティ意識向上トレーニング。",
        startDate: getDateOffset(-5),
        endDate: getDateOffset(-5),
        location: "Online",
        department: "all",
        priority: "important",
        isRecurring: true,
        recurrencePattern: "yearly",
        reminderSent: true,
        createdBy: "IT Security",
        color: "#D13438"
    }
];
const mockNotifications = [
    {
        id: "1",
        title: "New Announcement",
        titleJa: "新しいお知らせ",
        message: "CEO has posted a new company update",
        messageJa: "CEOが新しい会社のアップデートを投稿しました",
        type: "announcement",
        isRead: false,
        createdAt: new Date().toISOString(),
        link: "/announcements"
    },
    {
        id: "2",
        title: "Event Reminder",
        titleJa: "イベントリマインダー",
        message: "All-Hands Meeting starts in 1 hour",
        messageJa: "全社ミーティングが1時間後に始まります",
        type: "reminder",
        isRead: false,
        createdAt: new Date(Date.now() - 3600000).toISOString(),
        link: "/events"
    },
    {
        id: "3",
        title: "System Update",
        titleJa: "システムアップデート",
        message: "Portal has been updated with new features",
        messageJa: "ポータルが新機能で更新されました",
        type: "system",
        isRead: true,
        createdAt: new Date(Date.now() - 86400000).toISOString()
    },
    {
        id: "4",
        title: "New Teams Message",
        titleJa: "新しいTeamsメッセージ",
        message: "You have new messages in Engineering channel",
        messageJa: "エンジニアリングチャンネルに新しいメッセージがあります",
        type: "teams",
        isRead: false,
        createdAt: new Date(Date.now() - 1800000).toISOString(),
        link: "/teams"
    }
];
const mockTeams = [
    {
        id: "team-1",
        name: "Engineering",
        description: "Engineering department team",
        memberCount: 45,
        icon: "code",
        channels: [
            {
                id: "ch-1",
                name: "General",
                description: "General engineering discussions",
                teamId: "team-1",
                teamName: "Engineering",
                memberCount: 45,
                isPrivate: false,
                lastActivity: new Date().toISOString()
            },
            {
                id: "ch-2",
                name: "Frontend",
                description: "Frontend development discussions",
                teamId: "team-1",
                teamName: "Engineering",
                memberCount: 18,
                isPrivate: false,
                lastActivity: new Date(Date.now() - 3600000).toISOString()
            },
            {
                id: "ch-3",
                name: "Backend",
                description: "Backend development discussions",
                teamId: "team-1",
                teamName: "Engineering",
                memberCount: 22,
                isPrivate: false,
                lastActivity: new Date(Date.now() - 7200000).toISOString()
            },
            {
                id: "ch-4",
                name: "DevOps",
                description: "DevOps and infrastructure",
                teamId: "team-1",
                teamName: "Engineering",
                memberCount: 8,
                isPrivate: true,
                lastActivity: new Date(Date.now() - 1800000).toISOString()
            }
        ]
    },
    {
        id: "team-2",
        name: "Marketing",
        description: "Marketing department team",
        memberCount: 25,
        icon: "megaphone",
        channels: [
            {
                id: "ch-5",
                name: "General",
                description: "General marketing discussions",
                teamId: "team-2",
                teamName: "Marketing",
                memberCount: 25,
                isPrivate: false,
                lastActivity: new Date(Date.now() - 5400000).toISOString()
            },
            {
                id: "ch-6",
                name: "Campaigns",
                description: "Campaign planning and execution",
                teamId: "team-2",
                teamName: "Marketing",
                memberCount: 15,
                isPrivate: false,
                lastActivity: new Date(Date.now() - 10800000).toISOString()
            },
            {
                id: "ch-7",
                name: "Social Media",
                description: "Social media management",
                teamId: "team-2",
                teamName: "Marketing",
                memberCount: 8,
                isPrivate: false,
                lastActivity: new Date(Date.now() - 14400000).toISOString()
            }
        ]
    },
    {
        id: "team-3",
        name: "Sales",
        description: "Sales department team",
        memberCount: 35,
        icon: "trending-up",
        channels: [
            {
                id: "ch-8",
                name: "General",
                description: "General sales discussions",
                teamId: "team-3",
                teamName: "Sales",
                memberCount: 35,
                isPrivate: false,
                lastActivity: new Date(Date.now() - 900000).toISOString()
            },
            {
                id: "ch-9",
                name: "Leads",
                description: "Lead tracking and management",
                teamId: "team-3",
                teamName: "Sales",
                memberCount: 20,
                isPrivate: true,
                lastActivity: new Date(Date.now() - 2700000).toISOString()
            }
        ]
    },
    {
        id: "team-4",
        name: "HR",
        description: "Human Resources team",
        memberCount: 12,
        icon: "users",
        channels: [
            {
                id: "ch-10",
                name: "General",
                description: "General HR discussions",
                teamId: "team-4",
                teamName: "HR",
                memberCount: 12,
                isPrivate: false,
                lastActivity: new Date(Date.now() - 21600000).toISOString()
            },
            {
                id: "ch-11",
                name: "Recruitment",
                description: "Recruitment updates",
                teamId: "team-4",
                teamName: "HR",
                memberCount: 6,
                isPrivate: true,
                lastActivity: new Date(Date.now() - 43200000).toISOString()
            }
        ]
    },
    {
        id: "team-5",
        name: "Company Wide",
        description: "All employees",
        memberCount: 156,
        icon: "building",
        channels: [
            {
                id: "ch-12",
                name: "Announcements",
                description: "Company-wide announcements",
                teamId: "team-5",
                teamName: "Company Wide",
                memberCount: 156,
                isPrivate: false,
                lastActivity: new Date().toISOString()
            },
            {
                id: "ch-13",
                name: "Random",
                description: "Off-topic discussions",
                teamId: "team-5",
                teamName: "Company Wide",
                memberCount: 156,
                isPrivate: false,
                lastActivity: new Date(Date.now() - 600000).toISOString()
            },
            {
                id: "ch-14",
                name: "Events",
                description: "Company events and celebrations",
                teamId: "team-5",
                teamName: "Company Wide",
                memberCount: 156,
                isPrivate: false,
                lastActivity: new Date(Date.now() - 3600000).toISOString()
            }
        ]
    }
];
const mockTeamsMessages = [
    {
        id: "msg-1",
        content: "Great news everyone! We just closed the biggest deal of the quarter. Congratulations to the whole team!",
        from: "David Kim",
        fromId: "user-1",
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        channelName: "General",
        channelId: "ch-8",
        teamId: "team-3"
    },
    {
        id: "msg-2",
        content: "Reminder: Code freeze for v2.0 is tomorrow at 5 PM. Please complete all PRs by then.",
        from: "Mike Chen",
        fromId: "user-2",
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        channelName: "General",
        channelId: "ch-1",
        teamId: "team-1"
    },
    {
        id: "msg-3",
        content: "The new office snacks have arrived! Check the kitchen on 3rd floor.",
        from: "Office Manager",
        fromId: "user-3",
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        channelName: "Random",
        channelId: "ch-13",
        teamId: "team-5"
    },
    {
        id: "msg-4",
        content: "Frontend team standup in 15 minutes. Please join the Teams meeting.",
        from: "Sarah Lee",
        fromId: "user-4",
        timestamp: new Date(Date.now() - 900000).toISOString(),
        channelName: "Frontend",
        channelId: "ch-2",
        teamId: "team-1"
    },
    {
        id: "msg-5",
        content: "New campaign assets are ready for review. Check the shared folder.",
        from: "Lisa Wang",
        fromId: "user-5",
        timestamp: new Date(Date.now() - 5400000).toISOString(),
        channelName: "Campaigns",
        channelId: "ch-6",
        teamId: "team-2"
    }
];
const mockDocuments = [
    {
        id: "doc-1",
        name: "Company Policies",
        type: "folder",
        modifiedAt: new Date(Date.now() - 86400000).toISOString(),
        modifiedBy: "HR Team",
        department: "all",
        path: "/",
        isFolder: true,
        children: [
            {
                id: "doc-1-1",
                name: "Employee Handbook 2024.pdf",
                type: "pdf",
                size: "2.4 MB",
                modifiedAt: new Date(Date.now() - 86400000).toISOString(),
                modifiedBy: "HR Team",
                department: "all",
                path: "/Company Policies",
                isFolder: false
            },
            {
                id: "doc-1-2",
                name: "Code of Conduct.pdf",
                type: "pdf",
                size: "1.1 MB",
                modifiedAt: new Date(Date.now() - 172800000).toISOString(),
                modifiedBy: "HR Team",
                department: "all",
                path: "/Company Policies",
                isFolder: false
            }
        ]
    },
    {
        id: "doc-2",
        name: "Engineering",
        type: "folder",
        modifiedAt: new Date(Date.now() - 3600000).toISOString(),
        modifiedBy: "Engineering",
        department: "engineering",
        path: "/",
        isFolder: true,
        children: [
            {
                id: "doc-2-1",
                name: "API Documentation.pdf",
                type: "pdf",
                size: "5.2 MB",
                modifiedAt: new Date(Date.now() - 3600000).toISOString(),
                modifiedBy: "Mike Chen",
                department: "engineering",
                path: "/Engineering",
                isFolder: false
            },
            {
                id: "doc-2-2",
                name: "Architecture Diagram.pptx",
                type: "pptx",
                size: "3.8 MB",
                modifiedAt: new Date(Date.now() - 7200000).toISOString(),
                modifiedBy: "Tech Lead",
                department: "engineering",
                path: "/Engineering",
                isFolder: false
            }
        ]
    },
    {
        id: "doc-3",
        name: "Marketing Materials",
        type: "folder",
        modifiedAt: new Date(Date.now() - 14400000).toISOString(),
        modifiedBy: "Marketing",
        department: "marketing",
        path: "/",
        isFolder: true,
        children: [
            {
                id: "doc-3-1",
                name: "Brand Guidelines.pdf",
                type: "pdf",
                size: "8.5 MB",
                modifiedAt: new Date(Date.now() - 14400000).toISOString(),
                modifiedBy: "Lisa Wang",
                department: "marketing",
                path: "/Marketing Materials",
                isFolder: false
            }
        ]
    },
    {
        id: "doc-4",
        name: "Finance Reports",
        type: "folder",
        modifiedAt: new Date(Date.now() - 43200000).toISOString(),
        modifiedBy: "Finance",
        department: "finance",
        path: "/",
        isFolder: true,
        children: [
            {
                id: "doc-4-1",
                name: "Q4 Financial Report.xlsx",
                type: "xlsx",
                size: "1.2 MB",
                modifiedAt: new Date(Date.now() - 43200000).toISOString(),
                modifiedBy: "CFO",
                department: "finance",
                path: "/Finance Reports",
                isFolder: false
            }
        ]
    },
    {
        id: "doc-5",
        name: "Templates",
        type: "folder",
        modifiedAt: new Date(Date.now() - 604800000).toISOString(),
        modifiedBy: "Admin",
        department: "all",
        path: "/",
        isFolder: true,
        children: [
            {
                id: "doc-5-1",
                name: "Meeting Minutes Template.doc",
                type: "doc",
                size: "45 KB",
                modifiedAt: new Date(Date.now() - 604800000).toISOString(),
                modifiedBy: "Admin",
                department: "all",
                path: "/Templates",
                isFolder: false
            },
            {
                id: "doc-5-2",
                name: "Project Proposal Template.pptx",
                type: "pptx",
                size: "2.1 MB",
                modifiedAt: new Date(Date.now() - 604800000).toISOString(),
                modifiedBy: "Admin",
                department: "all",
                path: "/Templates",
                isFolder: false
            }
        ]
    }
];
const mockHelpTickets = [
    {
        id: "ticket-1",
        title: "Cannot access VPN",
        description: "I'm unable to connect to the company VPN from home. Getting timeout errors.",
        status: "in-progress",
        priority: "high",
        category: "IT Support",
        createdBy: "John Smith",
        createdAt: new Date(Date.now() - 7200000).toISOString(),
        updatedAt: new Date(Date.now() - 3600000).toISOString(),
        assignedTo: "IT Support Team",
        responses: [
            {
                id: "resp-1",
                content: "We're looking into this issue. Can you please provide your employee ID and the error message you're seeing?",
                author: "IT Support",
                createdAt: new Date(Date.now() - 3600000).toISOString(),
                isStaff: true
            }
        ]
    },
    {
        id: "ticket-2",
        title: "Request for new monitor",
        description: "My current monitor is flickering. Would like to request a replacement.",
        status: "open",
        priority: "medium",
        category: "Equipment",
        createdBy: "Jane Doe",
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        updatedAt: new Date(Date.now() - 86400000).toISOString(),
        responses: []
    },
    {
        id: "ticket-3",
        title: "Password reset request",
        description: "Forgot my email password and need a reset.",
        status: "resolved",
        priority: "low",
        category: "Account",
        createdBy: "Bob Wilson",
        createdAt: new Date(Date.now() - 172800000).toISOString(),
        updatedAt: new Date(Date.now() - 86400000).toISOString(),
        assignedTo: "IT Support Team",
        responses: [
            {
                id: "resp-2",
                content: "Password has been reset. Please check your phone for the temporary password.",
                author: "IT Support",
                createdAt: new Date(Date.now() - 86400000).toISOString(),
                isStaff: true
            }
        ]
    }
];
const mockFAQs = [
    {
        id: "faq-1",
        question: "What are the office hours?",
        questionJa: "オフィスの営業時間は？",
        answer: "Our office hours are Monday to Friday, 9:00 AM to 6:00 PM. The office is closed on weekends and public holidays.",
        answerJa: "オフィスの営業時間は月曜日から金曜日の午前9時から午後6時です。週末と祝日は休業です。",
        category: "general"
    },
    {
        id: "faq-2",
        question: "How do I submit a leave request?",
        questionJa: "休暇申請はどうすればいいですか？",
        answer: "You can submit a leave request through the HR portal. Go to 'My Requests' > 'Leave Request' and fill out the form. Your manager will be notified automatically.",
        answerJa: "HRポータルから休暇申請を提出できます。「マイリクエスト」>「休暇申請」に移動してフォームに記入してください。マネージャーには自動的に通知されます。",
        category: "hr"
    },
    {
        id: "faq-3",
        question: "How do I reset my password?",
        questionJa: "パスワードをリセットするにはどうすればいいですか？",
        answer: "Visit the IT Help Desk page and create a ticket for password reset, or contact IT Support directly at it-support@company.com.",
        answerJa: "ITヘルプデスクページにアクセスしてパスワードリセットのチケットを作成するか、it-support@company.comでITサポートに直接連絡してください。",
        category: "it"
    },
    {
        id: "faq-4",
        question: "Where can I find company policies?",
        questionJa: "会社のポリシーはどこで確認できますか？",
        answer: "All company policies are available in the Documents section under 'Company Policies'. You can also find the Employee Handbook there.",
        answerJa: "すべての会社ポリシーは「会社ポリシー」のドキュメントセクションで確認できます。従業員ハンドブックもそこにあります。",
        category: "general"
    },
    {
        id: "faq-5",
        question: "How do I book a meeting room?",
        questionJa: "会議室の予約方法は？",
        answer: "Meeting rooms can be booked through Microsoft Outlook or Teams. Simply create a new meeting and add the room as a location.",
        answerJa: "会議室はMicrosoft OutlookまたはTeamsで予約できます。新しい会議を作成し、場所として部屋を追加するだけです。",
        category: "facilities"
    }
];
}),
"[project]/app/api/chatbot/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { message, language = "en", department, history = [] } = body;
        const lowerMessage = message.toLowerCase();
        let response = "";
        // FAQ matching
        const matchedFAQ = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockFAQs"].find((faq)=>{
            const question = language === "ja" ? faq.questionJa : faq.question;
            return lowerMessage.includes(question.toLowerCase().slice(0, 20)) || question.toLowerCase().includes(lowerMessage.slice(0, 20));
        });
        if (matchedFAQ) {
            response = language === "ja" ? matchedFAQ.answerJa : matchedFAQ.answer;
        } else if (lowerMessage.includes("announcement") || lowerMessage.includes("news") || lowerMessage.includes("お知らせ") || lowerMessage.includes("ニュース")) {
            const relevantAnnouncements = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockAnnouncements"].filter((a)=>a.status === "approved" && (!department || a.department === "all" || a.department === department)).slice(0, 5);
            if (relevantAnnouncements.length > 0) {
                response = language === "ja" ? `最新のお知らせは以下の通りです：\n\n${relevantAnnouncements.map((a, i)=>`${i + 1}. **${a.titleJa || a.title}**\n   ${(a.contentJa || a.content).slice(0, 100)}...`).join("\n\n")}\n\n詳細は「お知らせ」ページでご確認ください。` : `Here are the latest announcements:\n\n${relevantAnnouncements.map((a, i)=>`${i + 1}. **${a.title}**\n   ${a.content.slice(0, 100)}...`).join("\n\n")}\n\nCheck the Announcements page for more details.`;
            } else {
                response = language === "ja" ? "現在、新しいお知らせはありません。" : "There are no new announcements at the moment.";
            }
        } else if (lowerMessage.includes("event") || lowerMessage.includes("meeting") || lowerMessage.includes("イベント") || lowerMessage.includes("ミーティング") || lowerMessage.includes("予定")) {
            const now = new Date();
            const upcomingEvents = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockEvents"].filter((e)=>new Date(e.startDate) > now).slice(0, 5);
            if (upcomingEvents.length > 0) {
                response = language === "ja" ? `今後のイベント：\n\n${upcomingEvents.map((e, i)=>{
                    const date = new Date(e.startDate).toLocaleDateString("ja-JP", {
                        month: "long",
                        day: "numeric",
                        weekday: "short"
                    });
                    return `${i + 1}. **${e.titleJa || e.title}**\n   📅 ${date} | 📍 ${e.location}`;
                }).join("\n\n")}\n\n詳細は「イベント」ページでご確認ください。` : `Upcoming events:\n\n${upcomingEvents.map((e, i)=>{
                    const date = new Date(e.startDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        weekday: "short"
                    });
                    return `${i + 1}. **${e.title}**\n   📅 ${date} | 📍 ${e.location}`;
                }).join("\n\n")}\n\nCheck the Events page for more details.`;
            } else {
                response = language === "ja" ? "現在、予定されているイベントはありません。" : "There are no upcoming events at the moment.";
            }
        } else if (lowerMessage.includes("help") || lowerMessage.includes("support") || lowerMessage.includes("ヘルプ") || lowerMessage.includes("サポート") || lowerMessage.includes("困")) {
            response = language === "ja" ? `お手伝いできることは以下の通りです：\n\n• 📢 **お知らせ** - 最新の会社のお知らせを確認\n• 📅 **イベント** - 今後のイベントやミーティング\n• 📁 **ドキュメント** - 会社のポリシーやファイル\n• 🎫 **ヘルプデスク** - ITサポートチケットを作成\n• 👥 **チーム** - チームやチャンネルを確認\n\n何かお探しですか？` : `I can help you with:\n\n• 📢 **Announcements** - Latest company updates\n• 📅 **Events** - Upcoming meetings and events\n• 📁 **Documents** - Company policies and files\n• 🎫 **Help Desk** - Create IT support tickets\n• 👥 **Teams** - View teams and channels\n\nWhat are you looking for?`;
        } else if (lowerMessage.includes("document") || lowerMessage.includes("file") || lowerMessage.includes("policy") || lowerMessage.includes("ドキュメント") || lowerMessage.includes("ファイル") || lowerMessage.includes("ポリシー")) {
            const folders = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockDocuments"].filter((d)=>d.isFolder);
            response = language === "ja" ? `利用可能なドキュメントフォルダ：\n\n${folders.map((f)=>`📁 **${f.name}** - ${f.children?.length || 0} ファイル`).join("\n")}\n\nドキュメントページで詳細を確認できます。` : `Available document folders:\n\n${folders.map((f)=>`📁 **${f.name}** - ${f.children?.length || 0} files`).join("\n")}\n\nYou can browse them on the Documents page.`;
        } else if (lowerMessage.includes("password") || lowerMessage.includes("reset") || lowerMessage.includes("パスワード") || lowerMessage.includes("リセット")) {
            response = language === "ja" ? "パスワードをリセットするには：\n\n1. ヘルプデスクページにアクセス\n2. 「チケットを作成」をクリック\n3. カテゴリから「アカウント」を選択\n4. パスワードリセットをリクエスト\n\nまたは、it-support@company.com にメールでお問い合わせください。" : "To reset your password:\n\n1. Go to the Help Desk page\n2. Click 'Create Ticket'\n3. Select 'Account' as category\n4. Request a password reset\n\nOr email it-support@company.com directly.";
        } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey") || lowerMessage.includes("こんにちは") || lowerMessage.includes("おはよう")) {
            const hour = new Date().getHours();
            const greeting = hour < 12 ? language === "ja" ? "おはようございます" : "Good morning" : hour < 17 ? language === "ja" ? "こんにちは" : "Good afternoon" : language === "ja" ? "こんばんは" : "Good evening";
            response = language === "ja" ? `${greeting}！何かお手伝いできることはありますか？お知らせ、イベント、ドキュメントなどについてお聞きください。` : `${greeting}! How can I help you today? Feel free to ask about announcements, events, documents, or anything else.`;
        } else if (lowerMessage.includes("thank") || lowerMessage.includes("ありがとう") || lowerMessage.includes("感謝")) {
            response = language === "ja" ? "どういたしまして！他にご質問がありましたらお気軽にどうぞ。" : "You're welcome! Feel free to ask if you have any other questions.";
        } else {
            response = language === "ja" ? `ご質問ありがとうございます。以下のトピックについてお手伝いできます：\n\n• お知らせや最新ニュース\n• イベントやミーティング\n• ドキュメントや会社ポリシー\n• ITサポートやヘルプデスク\n• チームやチャンネル\n\n「ヘルプ」と入力すると、詳細なオプションを表示できます。` : `Thank you for your question. I can help you with:\n\n• Announcements and news updates\n• Events and meetings\n• Documents and company policies\n• IT support and help desk\n• Teams and channels\n\nType "help" to see more options.`;
        }
        // Add suggested actions based on response
        const suggestedActions = [];
        if (response.includes("announcement") || response.includes("お知らせ")) {
            suggestedActions.push(language === "ja" ? "お知らせを見る" : "View announcements");
        }
        if (response.includes("event") || response.includes("イベント")) {
            suggestedActions.push(language === "ja" ? "イベントを確認" : "Check events");
        }
        if (response.includes("document") || response.includes("ドキュメント")) {
            suggestedActions.push(language === "ja" ? "ドキュメントを閲覧" : "Browse documents");
        }
        if (response.includes("help desk") || response.includes("ヘルプデスク")) {
            suggestedActions.push(language === "ja" ? "チケットを作成" : "Create ticket");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            response,
            suggestedActions: suggestedActions.length > 0 ? suggestedActions : undefined
        });
    } catch (error) {
        console.error("Chatbot error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "An error occurred processing your request"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9972bb60._.js.map