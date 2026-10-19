import { jsPDF } from 'jspdf'

type CertificateInput = {
  name: string
  course: string
  hours: number
  date: string
}

export function downloadCertificate({ name, course, hours, date }: CertificateInput) {
  const doc = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' })
  const width = doc.internal.pageSize.getWidth()
  const height = doc.internal.pageSize.getHeight()

  doc.setFillColor(8, 18, 28)
  doc.rect(0, 0, width, height, 'F')

  doc.setDrawColor(212, 175, 55)
  doc.setLineWidth(4)
  doc.rect(28, 28, width - 56, height - 56, 'S')
  doc.setLineWidth(1.2)
  doc.rect(38, 38, width - 76, height - 76, 'S')

  doc.setTextColor(212, 175, 55)
  doc.setFont('times', 'italic')
  doc.setFontSize(16)
  doc.text('FORGELEARN ACADEMY', width / 2, 92, { align: 'center' })

  doc.setFont('times', 'bold')
  doc.setFontSize(36)
  doc.setTextColor(250, 248, 240)
  doc.text('Certificate of Completion', width / 2, 148, { align: 'center' })

  doc.setDrawColor(45, 212, 191)
  doc.setLineWidth(1.5)
  doc.line(width / 2 - 90, 164, width / 2 + 90, 164)

  doc.setFont('times', 'italic')
  doc.setFontSize(14)
  doc.setTextColor(180, 190, 200)
  doc.text('This is to certify that', width / 2, 210, { align: 'center' })

  doc.setFont('times', 'bold')
  doc.setFontSize(32)
  doc.setTextColor(45, 212, 191)
  doc.text(name, width / 2, 258, { align: 'center' })

  doc.setFont('times', 'normal')
  doc.setFontSize(14)
  doc.setTextColor(220, 226, 232)
  doc.text('has successfully completed the development course', width / 2, 300, { align: 'center' })

  doc.setFont('times', 'bold')
  doc.setFontSize(22)
  doc.setTextColor(250, 248, 240)
  doc.text(course, width / 2, 338, { align: 'center' })

  doc.setFont('times', 'normal')
  doc.setFontSize(13)
  doc.setTextColor(180, 190, 200)
  doc.text(
    `a ${hours}-hour guided path covering MongoDB, Express, React, and Node.js.`,
    width / 2,
    372,
    { align: 'center' },
  )

  doc.setFont('times', 'italic')
  doc.setFontSize(12)
  doc.setTextColor(212, 175, 55)
  doc.text(date, width / 2 - 180, 450, { align: 'center' })
  doc.text('Lead Instructor', width / 2 + 180, 450, { align: 'center' })

  doc.setDrawColor(180, 190, 200)
  doc.setLineWidth(0.8)
  doc.line(width / 2 - 250, 432, width / 2 - 110, 432)
  doc.line(width / 2 + 110, 432, width / 2 + 250, 432)

  doc.setFont('times', 'normal')
  doc.setFontSize(11)
  doc.setTextColor(160, 170, 180)
  doc.text('Issued on', width / 2 - 180, 468, { align: 'center' })
  doc.text('A. Rao', width / 2 + 180, 432, { align: 'center' })
  doc.text('ForgeLearn', width / 2 + 180, 468, { align: 'center' })

  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  doc.save(`forgelearn-${slug || 'certificate'}.pdf`)
}
