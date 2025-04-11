"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ThumbsUp, MessageSquare, Flag, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Sample comments data
const sampleComments = [
  {
    id: 1,
    author: "John Smith",
    avatar: "JS",
    date: "June 18, 2023",
    content:
      "This article was incredibly helpful! I've been struggling with optimizing our company's supply chain, and these strategies give me a clear roadmap to follow. Thanks for sharing this valuable information.",
    likes: 12,
    liked: false,
    replies: [
      {
        id: 101,
        author: "Sarah Johnson",
        avatar: "SJ",
        date: "June 18, 2023",
        content:
          "I'm glad you found it helpful, John! Let me know if you have any specific questions about implementing these strategies.",
        likes: 3,
        liked: false,
      },
    ],
  },
  {
    id: 2,
    author: "Maria Garcia",
    avatar: "MG",
    date: "June 17, 2023",
    content:
      "Great insights on leveraging technology for supply chain optimization. We implemented a similar approach last year and saw a 20% reduction in logistics costs. I would add that change management is crucial when introducing new systems - getting team buy-in makes all the difference.",
    likes: 8,
    liked: false,
    replies: [],
  },
]

export function BlogComments() {
  const [comments, setComments] = useState(sampleComments)
  const [newComment, setNewComment] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the comment to an API
    console.log("Submitting comment:", { name, email, newComment })
    setNewComment("")
  }

  const handleLike = (commentId: number, replyId?: number) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (replyId) {
          // Handle reply like
          if (comment.id === commentId) {
            return {
              ...comment,
              replies: comment.replies.map((reply) => {
                if (reply.id === replyId) {
                  return {
                    ...reply,
                    likes: reply.liked ? reply.likes - 1 : reply.likes + 1,
                    liked: !reply.liked,
                  }
                }
                return reply
              }),
            }
          }
          return comment
        } else {
          // Handle comment like
          if (comment.id === commentId) {
            return {
              ...comment,
              likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
              liked: !comment.liked,
            }
          }
          return comment
        }
      }),
    )
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center text-center py-10">
            <div className="rounded-full bg-green-100 dark:bg-green-900 p-3 mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-300" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Thank you for contacting us. One of our team members will get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>

        {/* Comment form */}
        <form onSubmit={handleSubmit} className="mb-10">
          <h4 className="text-lg font-semibold mb-4">Leave a Comment</h4>
          <div className="space-y-4">
            <Textarea
              placeholder="Your comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[120px]"
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit">Post Comment</Button>
            </div>
          </div>
        </form>

        {/* Comments list */}
        <div className="space-y-8">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-100 dark:border-gray-800 pb-8 last:border-0">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{comment.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold">{comment.author}</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{comment.date}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{comment.content}</p>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`flex items-center gap-1 h-8 px-2 ${comment.liked ? "text-primary" : ""}`}
                      onClick={() => handleLike(comment.id)}
                    >
                      <ThumbsUp className="h-4 w-4" />
                      <span>{comment.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 h-8 px-2">
                      <MessageSquare className="h-4 w-4" />
                      <span>Reply</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 h-8 px-2">
                      <Flag className="h-4 w-4" />
                      <span>Report</span>
                    </Button>
                  </div>

                  {/* Replies */}
                  {comment.replies.length > 0 && (
                    <div className="mt-6 ml-6 space-y-6">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex items-start gap-4">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{reply.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h5 className="font-semibold">{reply.author}</h5>
                              <span className="text-sm text-gray-500 dark:text-gray-400">{reply.date}</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">{reply.content}</p>
                            <div className="flex items-center gap-4">
                              <Button
                                variant="ghost"
                                size="sm"
                                className={`flex items-center gap-1 h-7 px-2 text-sm ${reply.liked ? "text-primary" : ""}`}
                                onClick={() => handleLike(comment.id, reply.id)}
                              >
                                <ThumbsUp className="h-3 w-3" />
                                <span>{reply.likes}</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1 h-7 px-2 text-sm">
                                <Flag className="h-3 w-3" />
                                <span>Report</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
